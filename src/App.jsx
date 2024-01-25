import './App.css'

function App(props) {
     let imageArray=[] 
      let imageStored = props.data ;

     imageStored.forEach(data => {
      imageArray.push (
        <img key={data.id} src = {data.img} alt={`num${data.id}`}></img>

      )
     }) 
       return (
         <div>
        <div>
          <h1 id='headline'>Kalvium  functional  Gallery </h1>
        </div>
         <div className ='imageDiv'>
           {imageArray}
         </div>
    

       </div>
     )
}



export default App
