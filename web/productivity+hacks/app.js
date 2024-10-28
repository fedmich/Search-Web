"use strict";

const items = [
  "Avoid multitasking", "Dedicated workspace", "Take breaks", "Set SMART goals", 
  "Prioritize tasks daily", "Say no", "The Pomodoro Technique", "Delegate tasks", 
  "Eliminate distractions", "Listen to productive music", "Start your day early", 
  "Work in short bursts", "No meetings in the morning", "The two-minute rule", 
  "Time blocking", "Wake up early", "Avoid procrastination and distractions", 
  "Create working time blocks", "Make to-do lists", "Plan for time management", 
  "Practice workday self-care", "Prioritize natural light", "Timebox tasks", 
  "Use productivity tools"
];

let displayedCount = 9;

function loadItems() {
  const grid = document.getElementById("grid");

  // Populate and animate items up to displayedCount
  for (let i = 0; i < displayedCount && i < items.length; i++) {
    if (!grid.children[i]) {
      const link = document.createElement("a");
      link.className = "item";
      link.href = `https://fedmich.com/search/${items[i].replace(/ /g, "+")}`;
      link.textContent = items[i];
      grid.appendChild(link);

      // Trigger slide-up animation with a slight delay for each item
      setTimeout(() => link.classList.add("slide-up"), i * 100);
    }
  }
  
  document.getElementById("show-more").style.display = displayedCount < items.length ? "block" : "none";
}

function showMore() {
  displayedCount += 9;
  loadItems();
}

// Initial load with animation
document.addEventListener("DOMContentLoaded", loadItems);
