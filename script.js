function showSchedule(day) {
    const schedules = document.querySelectorAll('.schedule');
    schedules.forEach(schedule => {
        schedule.style.display = 'none';
    });

    const selectedSchedule = document.getElementById('schedule-' + day);
    selectedSchedule.style.display = 'block';
}
