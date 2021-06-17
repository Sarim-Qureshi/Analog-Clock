var audio = new Audio('clock.mp3');
audio.play();

setInterval(() => {
    var date = new Date();
    time_hour = date.getHours();
    time_minute = date.getMinutes();
    time_second = date.getSeconds();
    hour_hand_rotation = time_hour*30 + time_minute/2;
    minute_hand_rotation = 6*time_minute +6*time_second/60;
    second_hand_rotation = 6*time_second;
    hour.style.transform = `rotate(${hour_hand_rotation}deg)`
    minute.style.transform = `rotate(${minute_hand_rotation}deg)`
    second.style.transform = `rotate(${second_hand_rotation}deg)`
    
}, 1000);