import React,{Component} from "react"

class MemeGen extends Component{
	constructor(){
		super()
		this.state = {
			topText:"",
			bottomText:"",
			rimage:"https://i.imgflip.com/1otk96.jpg",
			allImgs:[]
		}
		this.handeler = this.handeler.bind(this)
		this.sHandel = this.sHandel.bind(this)
	}
	componentDidMount(){
		fetch("https://api.imgflip.com/get_memes")
		.then(response => response.json())
		.then(response => {
			const {memes} = response.data
			this.setState({allImgs:memes})
		})
	}
	handeler(event){
		const {name,value} = event.target
		this.setState({[name] : value})

	}
	sHandel(event){
		event.preventDefault()
		const rno = Math.floor(Math.random()* this.state.allImgs.length)
		const rimg = this.state.allImgs[rno].url
		this.setState({rimage:rimg})

	}

	render(){
		return(
		<div> 
			<form onSubmit= {this.sHandel}>
				<input type="text" name="topText" placeholder="Top Text" value={this.state.topText} onChange={this.handeler} />
				<input type="text" name="bottomText" placeholder="bottom Text" value={this.state.bottomText} onChange={this.handeler} />
				<button>Gen</button>
			</form>
			<br />
			<div>
				<img src={this.state.rimage} className="img" / >
				<p className="up">{this.state.topText}</p>
				<p className="down">{this.state.bottomText}</p>
			</div>
		</div>
		)
	}
}



export default MemeGen