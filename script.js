console.log('This is javascript'); // פקודה שכותבת לקונסול את ההודעה בסוגריים 


//find the element
//find the distance from top of the page
//change progress bar design

const progressBar = document.querySelector('#progress'); // לקחנו את האלמנט והכנסנו אותו כמשתנה שנקרא פרוגרסבר
document.onscroll=() => {  //פונקציה שפועלת כאשר יורדים למטה עם הסקרולר
    const distanceTop = window.pageYOffset; // מרחק המשתמש מהנקודה בראש העמוד בפיקסלים
    const pageHeight = document.body.scrollHeight - window.innerHeight; // גובה העמוד עצמו בציר פחות הרוחב של העמוד y 
    progressBar.style.width = (distanceTop/pageHeight)*100 + '%'; //מרחיב את הקו האדום למעלה לפי האחוז דף שהאתר נמצא בו מלמעלה, כלומר הגובה של הגלילה כלפי מטה מראש העמוד באחוזים
}