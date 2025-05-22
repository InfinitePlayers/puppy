function formatTime(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function timeToDate(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  const date = new Date();
  date.setHours(h, m, 0, 0);
  return date;
}

function getAgeInDays(dobString) {
  const dob = new Date(dobString);
  const now = new Date();
  return Math.floor((now - dob) / (1000 * 60 * 60 * 24));
}

function getTimeDiff(start, end) {
  let diff = Math.floor((end - start) / 1000);
  if (diff < 0) diff += 86400;
  const hours = Math.floor(diff / 3600);
  const mins = Math.floor((diff % 3600) / 60);
  const secs = diff % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m ${secs}s`;
}

function updateSchedule() {
  const now = new Date();
  const nowStr = formatTime(now);

  document.getElementById("date-display").innerText = now.toLocaleDateString("en-GB");
  document.getElementById("time-display").innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById("age-display").innerText = `${getAgeInDays('2025-03-23')} days`;

  let current = schedule[schedule.length - 1];
  let next = schedule[0];
  for (let i = 0; i < schedule.length - 1; i++) {
    if (nowStr >= schedule[i].time && nowStr < schedule[i + 1].time) {
      current = schedule[i];
      next = schedule[i + 1];
      break;
    }
  }

  const currentStart = timeToDate(current.time);
  const nextStart = timeToDate(next.time);
  const nextIndex = schedule.findIndex(s => s.time === next.time);
  const afterNext = schedule[nextIndex + 1] || schedule[0];

  document.getElementById("now").className = `block ${current.mood}`;
  document.getElementById("next").className = `block ${next.mood}`;
  document.getElementById("current-activity").innerText = current.activity;
  document.getElementById("current-range").innerText = `From ${current.time} to ${next.time}`;
  document.getElementById("stopwatch").innerText = `Elapsed: ${getTimeDiff(currentStart, now)}`;

  document.getElementById("next-activity").innerText = next.activity;
  document.getElementById("next-range").innerText = `From ${next.time} to ${afterNext.time}`;
  document.getElementById("countdown").innerText = `Starts in: ${getTimeDiff(now, nextStart)}`;

  const tip = current.tip;
  document.getElementById("training-tip").innerHTML = `
    <strong>${tip.title}</strong><br>
    <em>${tip.purpose}</em>
    <ul>${tip.actions.map(a => `<li>${a}</li>`).join("")}</ul>
    <p><strong>Commands:</strong> ${tip.commands.join(", ")}</p>
  `;

  const weight = 2.9;
  const feedingTimes = [
    "06:30", "06:45", "07:00",
    "12:30", "12:45", "13:00",
    "17:30", "18:00"
  ];
  document.getElementById("feeding-now").innerHTML = feedingTimes.includes(current.time) ? getFeedingNowHTML(weight) : "";

  const timeline = document.getElementById("timeline");
  timeline.innerHTML = "";
  let scrollTo = null;

  schedule.forEach(item => {
    const row = document.createElement("div");
    row.className = `timeline-row ${item.mood}`;
    const itemTime = timeToDate(item.time);
    if (item.time === current.time) {
      row.classList.add("current");
      scrollTo = row;
    } else if (now > itemTime) {
      row.classList.add("past");
    }
    row.innerHTML = `<strong>${item.time}</strong>: ${item.activity}`;
    timeline.appendChild(row);
  });

  if (scrollTo) {
    const timelineWrapper = document.getElementById("timeline-wrapper");
    const targetY = scrollTo.offsetTop - 50;
    timelineWrapper.scrollTo({ top: targetY, behavior: "smooth" });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateSchedule();
  setInterval(updateSchedule, 1000);
});

document.addEventListener("DOMContentLoaded", () => {
  updateSchedule();
  setInterval(updateSchedule, 1000);
});