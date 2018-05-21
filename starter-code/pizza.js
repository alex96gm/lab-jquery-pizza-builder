// Write your Pizza Builder JavaScript in this file.
$(document).ready(function () {
    clickButton();
});

function clickButton() {
    $(".btn").click(function () {
        $(this).toggleClass("active");
        switch ($(this).text()) {
            case "Pepperonni":
                toggleItemsPizza(".btn-pepperonni",".pep",".price-pepperonni");
                calculatePrice(".btn-pepperonni",1);
                break;
            case "Mushrooms":
                toggleItemsPizza(".btn-mushrooms",".mushroom",".price-mushrooms");
                calculatePrice(".btn-mushrooms",1);
                break;
            case "Green peppers":
                toggleItemsPizza(".btn-green-peppers",".green-pepper",".price-peppers");
                calculatePrice(".btn-green-peppers",1);
                break;
            case "White sauce":
                toggleItemsPizza(".btn-sauce",".sauce",".price-sauce");
                calculatePrice(".btn-sauce",3);
                break;
            case "Gluten-free crust":
                $(".price-crust").toggle();
                calculatePrice(".btn-crust",5);
                break;
        }
        var $basePrice = $(".basePrice").text();
        console.log($basePrice)

    })
}

function toggleItemsPizza(classbutton,classNameItem,classNamePrice){ 
    if ($(classbutton).hasClass("active")) {
        $(classNameItem).toggle();
        $(classNamePrice).toggle();
        
    } else {
        $(classNameItem).toggle();
        $(classNamePrice).toggle();
        
    }
}

function calculatePrice(classbutton,price){
    var $total = Number($(".total-price").text());
    if ($(classbutton).hasClass("active")) {
        $total = $total + price
    }else{
        $total = $total - price
    }
    
    $(".total-price").text($total);

}