import React from 'react';
import '../../assets/style/picture.css';

class Picture extends React.Component {
  constructor() {
    super();
    this.state = {
      pictures: [
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
      ],
      value: [],//存储被选中的图片
    }
  }
  all(e) {
    //遍历每个li,只要上面选中，下面就全选中
    document.querySelectorAll('.check').forEach(i => {
      i.checked = e.target.checked
    })
    var boo = e.target.checked

    //得到被选中的图片的信息
    this.setState(state => {
      state.value = boo ? this.state.pictures.map(item => item.id) : []
    }, () => {
      console.log(this.state.value)
    })
  }

  fn(e, item) {

    //如果该图片被选中
    if (e.target.checked === true) {
      //把图片追加在数组中
      this.setState(state => {
        state.value.push(item.id)
      }, () => {
        console.log(this.state.value)
      })
    } else {
      //该图片未被选中
      
      //查找在被选中图片的数组中，当前图片的下标
      var ind = this.state.value.findIndex(val => val === item.id);
      //在数组中删除该图片
      this.setState(state => {
        state.value.splice(ind, 1)
      }, () => {
        console.log(this.state.value)
      })
    }
    setTimeout(() => {
      //判断图片是否全被选中
      if (this.state.value.length !== 3) {
        this.refs.all.checked = false;
      } else {
        this.refs.all.checked = true;
      }
    })

  }
  setValue() {

  }
  render() {
    return <>
      <div className="main">
        <label>
          <input type="checkbox" ref='all' onClick={(e) => { this.all(e) }} onChange={() => { this.setValue() }} /><span>已选中3个文件</span>
        </label>

        <div className="box">
          {this.state.pictures.map(item => (
            <li key={item.id}>
              <label>
                <input type="checkbox" className="check" onClick={(e) => { this.fn(e, item) }} onChange={() => { this.setValue() }} />
                <img src={item.url} alt='' />
              </label>

            </li>
          ))}
        </div>
      </div>
    </>
  }

}

export default Picture;