function formatTime(time) {
    let minutes = time%60;
    let hours = (time-minutes)/60%24;
    let days= time/1440;
    return Math.floor(days)+" day(s) "+ hours + "hour(s) " +minutes+ " minute(s).";
}
formatTime(120);
