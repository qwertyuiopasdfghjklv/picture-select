import React from 'react';
import '../../assets/style/picture.css';
class App extends React.Component{
	constructor(){
		super();
		this.state={
			pictures : [],
			value : [],
		}
	}
	fn(e){
	
		document.querySelectorAll('.check').forEach(i=>{
			i.checked = e.target.checked
		})
		var boo = e.target.checked
		this.setState(state=>{
			state.value = boo ? this.state.pictures : []
		},()=>{
			console.log(this.state.value)
		})
	}
	fn1(e,item){
		return new Promise((resolve)=>{
			var ind = this.state.value.findIndex(val=>val.id===item.id);
			if(e.target.checked === true){
				this.setState(state=>{
					state.value.push(item)
				},()=>{
					console.log(this.state.value)
				})
			}else{
				this.setState(state=>{
					state.value.splice(ind,1)
				},()=>{
					console.log(this.state.value)
				})
			}
			resolve()
		})
		
	}
	change1(){
		setTimeout(()=>{
			this.change(this.state.value)
		},0)
	}
	change(value){
		console.log('value',value)
	}

	render(){
		return <>
			<div className="main">
				<input type="checkbox" onClick={(e)=>{this.fn(e)}} onChange={()=>{this.change1()}} /><span>全选</span>
				<div className="box">
					{this.state.pictures.map(item=>(
									<li key={item.id}>
										<input type="checkbox" className="check" onClick={(e)=>{this.fn1(e,item)}} onChange={()=>{this.change1()}} />
										<img src={item.url} alt='' />
									</li>
								))}
				</div>
			</div>
		</>
	}
	componentDidMount(){
		const pictures = [
		  {
		    id: '1',
		    name: 'foo',
		    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
		  },
		  {
		    id: '2',
		    name: 'foo',
		    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
		  },
		  {
		    id: '3',
		    name: 'foo',
		    url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
		  },
		];
		this.setState({
			pictures : pictures
		})
	}
}

export default App;