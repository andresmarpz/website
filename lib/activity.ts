interface Activity{
	time: string;
	daytime: 'morning' | 'afternoon' | 'evening' | 'night';
	activity: string;
}

function getTimeOfDay(hour: number){
	if(hour >= 6 && hour < 12){
		return "morning";
	}else if(hour >= 12 && hour < 18){
		return "afternoon";
	}else if(hour >= 18 && hour < 22){
		return "evening";
	}else{
		return "night";
	}
}

function getActivityByTime(hour: number){
	if(hour >= 8 && hour < 16){
		return "working";
	}else if(hour >= 12 && hour < 18){
		return "studying";
	}else if(hour >= 18 && hour < 22){
		return "playing";
	}else{
		return "sleeping";
	}
}

export default function getActivity(currentTime: Date): Activity{
	const currentHour = currentTime.getHours();
	const formattedTime = currentTime.toLocaleTimeString("en-US", {hour: "numeric", minute: "numeric"});
	const formattedDaytime = getTimeOfDay(currentHour);
	const formattedActivity = getActivityByTime(currentHour);

	return {
		time: formattedTime,
		daytime: formattedDaytime,
		activity: formattedActivity
	}
}

