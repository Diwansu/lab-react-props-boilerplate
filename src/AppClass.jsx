import{Component} from "react" 
import "./App.css";



export default class AppClass extends Component {
     render() {
    const { data } = this.props;
    let imageArray = [];
   
      

    data.forEach((item) => {
        imageArray.push(
        <img key={item.id} src={item.img} alt={`num${item.id}`} />
      );
    });

    return (
      <div>
        <div>
          <h1 id="headline">Kalvium Class Gallery </h1>
        </div>
        <div className="imageDiv">{imageArray}</div>
      </div>
    );
  }
}

