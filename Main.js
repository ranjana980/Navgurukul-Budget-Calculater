function Monthly() {
    a = document.getElementById("input").value
    b = document.getElementById("input1").value
    c = document.getElementById("input2").value
    d = document.getElementById("input3").value
    e = document.getElementById("input4").value
    f = document.getElementById("input5").value
    document.getElementById("Month1").innerHTML = a
    document.getElementById("Year1").innerHTML = Number(a) * 12
    document.getElementById("Month2").innerHTML = b
    document.getElementById("Year2").innerHTML = Number(b) * 12
    document.getElementById("Month3").innerHTML = c
    document.getElementById("Year3").innerHTML = Number(c) * 12
    document.getElementById("Month4").innerHTML = d
    document.getElementById("Year4").innerHTML = Number(d) * 12
    document.getElementById("Month5").innerHTML = e
    document.getElementById("Year5").innerHTML = Number(c) * 12
    document.getElementById("Month6").innerHTML = f
    document.getElementById("Year6").innerHTML = Number(f) * 12
    document.getElementById("Month7").innerHTML = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f)
    document.getElementById("Year7").innerHTML = (Number(a) * 12) + (Number(b) * 12) + (Number(c) * 12) + (Number(d) * 12) + (Number(e) * 12) + (Number(f) * 12)


}
function Yearly(){
    a = document.getElementById("input").value
    b = document.getElementById("input1").value
    c = document.getElementById("input2").value
    d = document.getElementById("input3").value
    e = document.getElementById("input4").value
    f = document.getElementById("input5").value
    document.getElementById("Year1").innerHTML = a
    document.getElementById("Month1").innerHTML = Number(a)/12
    document.getElementById("Year2").innerHTML = b
    document.getElementById("Month2").innerHTML = Number(b)/12
    document.getElementById("Year3").innerHTML = c
    document.getElementById("Month3").innerHTML = Number(c)/12
    document.getElementById("Year4").innerHTML = d
    document.getElementById("Month4").innerHTML = Number(d)/12
    document.getElementById("Year5").innerHTML = e
    document.getElementById("Month5").innerHTML = Number(e)/12
    document.getElementById("Year6").innerHTML = f
    document.getElementById("Month6").innerHTML = Number(f)/12
    document.getElementById("Year7").innerHTML = Number(a) + Number(b) + Number(c) + Number(d) + Number(e) + Number(f)
    document.getElementById("Month7").innerHTML = (Number(a) / 12) + (Number(b) /12) + (Number(c)/ 12) + (Number(d) /12) + (Number(e) /12) + (Number(f)/ 12)



}
function Clear(){
    a = document.getElementById("input").value=0
    b = document.getElementById("input1").value=0
    c = document.getElementById("input2").value=0
    d = document.getElementById("input3").value=0
    e = document.getElementById("input4").value=0
    f = document.getElementById("input5").value=0
    document.getElementById("Year1").innerHTML = a
    document.getElementById("Year1").innerHTML = 0
    document.getElementById("Month1").innerHTML = 0
    document.getElementById("Year2").innerHTML = 0
    document.getElementById("Month2").innerHTML = 0
    document.getElementById("Year3").innerHTML = 0
    document.getElementById("Month3").innerHTML = 0
    document.getElementById("Year4").innerHTML = 0
    document.getElementById("Month4").innerHTML = 0
    document.getElementById("Year5").innerHTML = 0
    document.getElementById("Month5").innerHTML = 0
    document.getElementById("Year6").innerHTML = 0
    document.getElementById("Month6").innerHTML = 0
    document.getElementById("Year7").innerHTML = 0
    document.getElementById("Month7").innerHTML = 0


}
