function addMore()
{
    var more = document.getElementById('more');
    var readMoreBtn = document.getElementById('readMoreBtn');
    var extra = document.getElementById('ex');

    if(extra.style.display === "none")
    {
        extra.style.display = "inline";
        more.style.display ="none";
        readMoreBtn.innerHTML = "Show More";
    }
    else {
        extra.style.display = "none";
        readMoreBtn.innerHTML = "Show Less";
        more.style.display = "flex";
    }
}