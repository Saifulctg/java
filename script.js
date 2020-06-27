document.write('<h3>Arithmetic Operators</h3>')
document.write('<h4>var a = 45 var b = 15</h4>')

var a = 45
var b = 15

document.write(a +' + '+ b +'=' +(a+b) +'<br>')
document.write(a +' - '+ b +'=' +(a-b) +'<br>')
document.write(a +' * '+ b +'=' +(a*b) +'<br>')
document.write(a +' / '+ b +'=' +(a/b) +'<br>')
document.write(a +' % '+ b +'=' +(a%b) +'<br><br>')

document.write('<h3>Comparison Operators</h3>')
document.write('<h4>var a = 10 var b = 20</h4>')

var a=10
var b=20

document.write((a==b )+'<br>')
document.write((a!=b)+'<br>')
document.write((a<=b)+'<br>')
document.write((a>=b)+'<br>')

document.write('<h4>var a = 20 var b = saiful</h4>')
var a=20
var b='saiful'

document.write((a===b) + '<br>')
document.write(a!==b)

document.write('<h4>var a = 20 var b = 6</h4>')
var a=20
var b=6
var test=a+b==26?'yes':'no'
document.write(test+'<br>')

document.write('<h3>Assignment Operators</h3>')
document.write('<h4>var a = 20</h4>')
var a=20

document.write('20+5= '+ (a+=5)+'<br>')
document.write('25-10= '+ (a-=10)+'<br>')
document.write('15*5= '+ (a*=5)+'<br>')
document.write('75/5= '+ (a/=5)+'<br>')
document.write('15%10= '+ (a%=10)+'<br>')
document.write('5**3= '+ (a**=3)+'<br>')

document.write('<h3>Logical Operators</h3>')
document.write('<h4>var a = 10 var b = 15</h4>')

var a=10
var b=15

if(a<11 && b>10){
    document.write('a is greater than b <br>')
}
if(a<10 || b>10){
    document.write('a is less than 10 or b is greater than 10 <br>')
}
if(!(a>b)){
    document.write('a is not greater than b <br>')
}
if(!(a==b)){
    document.write('a is not equle b <br>')
}

document.write('<h2>Multiplication-tables</h2>')
for(var a=1; a<=10;a++){
    document.write('<div class="section" >')
    for(var b=1; b<=10;b++){
        var result=a*b
        document.write(a+'x'+b+'='+result +'<br>')
    }
    document.write('</div>')
}

document.write('<h4>Result Marksheet</h4>')
var a = 30

if(0<a && a<=32){
    document.write('0 (F)')
}
if(33<=a && a<=39){
    document.write('1.00 (D)')
}
if(40<=a && a<=49){
    document.write('2.00 (C)')
}
if(50<=a && a<=59){
    document.write('3.00 (B)')
}
if(60<=a && a<=69){
    document.write('3.50 (A-)')
}
if(60<=a && a<=79){
    document.write('4.00 (A)')
}
if(80<=a && a<=100){
    document.write('5.00 (A+)')
}

