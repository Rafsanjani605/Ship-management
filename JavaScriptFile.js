//  document.querySelector('.my-button').addEventListener('click', function() {
//     alert('Button clicked!');

//   });



const togglebutton = document.getElementById('mybtn')
const toggledetails = document.getElementById('Toggledetails')



togglebutton.addEventListener('click' , ()=>{
    fetch('/data.json')
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        const header = data.header;
        console.log(header)
        const headerdetails = header.map(head => {
            return `
            <div>
                <ul class="dropsownstyle">
               
                <li><img src=${head.dropicon} alt=""></li>
                   <li> <a>${head.name} </a> </li>
                </ul>
            </div>
            
            `
        })
        toggledetails.innerHTML=headerdetails.join('');

        
        })

    })






    // function myfunction() {
    //     var element = document.getElementById("Toggledetails")
    //     element.classList.toggle("dropsownstyle")
    // }





    // for user arro button

 
    
    // const arrowfunction =()=>{
    //     const userBtn = document.getElementById
    //     if (userBtn.style.display === "none") {
    //         userBtn.style.display = "block";
            
    //     }
    //     else{
    //         userBtn.style.display === "none"
    //     }
    // }

    // sidenavs
const newBtn = document.getElementById('newbtn');
const contents = document.getElementById('contents');

// 
const toggleContents = () => {
  contents.classList.toggle('hidden');
  if (contents.classList.contains('hidden')) {
    newBtn.querySelector('img').setAttribute('src', '/images/Vector 175.svg' );
  } else {
    newBtn.querySelector('img').setAttribute('src', '/images/direction-down 01.svg');
  }

}




// add a click event listener to the newbtn element
newBtn.addEventListener('click', toggleContents);

