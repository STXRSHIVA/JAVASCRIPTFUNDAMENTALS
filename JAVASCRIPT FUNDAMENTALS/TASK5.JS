function calculateDliveryTime(packageType){
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight": 
            deliveryTime = "nextday";
            break;
        default:
            deliveryTime = "Invalid package type"
            break;
    }

    console.log(`The estimated delivery time for the ${packageType} package is ${deliveryTime}`);
}

calculateDliveryTime("standard");
calculateDliveryTime("express");
calculateDliveryTime("overnight");