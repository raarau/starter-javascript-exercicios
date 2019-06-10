        function intervaloPares(x, y) {

            if (x >= y) {
                for (x; y <= x; x--) {
                    if(x%2 === 0){
                     console.log(x);
                    }
                }
            }else{
                for (x; x <= y; x++) {
                    if(x%2 === 0){
                     console.log(x);
                    }
                }
            } 
        }

        intervaloPares(32, 321);

