function main () {

    var counter = -10;
    while (counter < 6) {
        console.log(counter);
        counter++;
    }

    function newmain() {
        var counter2 = 1;
        while (counter2 < 100) {
            console.log(counter2);
            counter2 = counter + 2;
        }

    }

    main();
    newmain();
}