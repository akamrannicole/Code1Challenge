function calculateDemeritPoints(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const pointsPerKmOverLimit = 1;

    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        const kmOverLimit = speed - speedLimit;
        const demeritPoints = Math.floor(kmOverLimit / kmPerDemeritPoint);

        if (demeritPoints > 12) {
            console.log("License suspended");
        } else {
            console.log(`Points: ${demeritPoints}`);
        }
    }
}

calculateDemeritPoints(80); // Output: Points: 2
calculateDemeritPoints(65); // Output: Ok
calculateDemeritPoints(150); // Output: License suspended
