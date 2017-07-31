import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, replace, go, goBack, goForward } from 'react-router-redux'
import * as NotfoundActions from '@actions/common/Notfound'
//import filterIcon from 'assets/filter.svg'
/**
 * @author
 * @name 
 * @class
 * @description
 */
export class Notfound extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillReceiveProps(nextProps){
    //此處setState不會觸發react lifecycle
  }

  /*
  shouldComponentUpdate(nextProps, nextState){
    //優化效能時使用，return將不觸發render
  }*/

  componentWillUpdate(nextProps, nextState){
    //render前觸發
  }

  render () {

    const {test} = this.props.notfound
    return (
      <div className='ui container'>
      Notfound
      <div>
        {test}
        4565656
      </div>
        <button className='ui button blue' onClick={()=>{this.props.actions.updateState({test : '123456'})}}>更新 state 測試</button><br/><br/>
        <button onClick={()=>{this.props.actions.push('/common/test')}}>to test</button><br/><br/>
        <button onClick={()=>{this.props.actions.ajaxTest({id : '123456'})}}>ajax test</button>
         <button className='abc' onClick={()=>{this.props.actions.twoAjaxTest({id : '123456'})}}>two ajax test</button>


      </div>
    )
  }

  componentDidUpdate(prevProps, prevState){
    //render後觸發
  }

  componentWillMount(){
    //組件將要被掛載時觸發（只會觸發一次）
  }

  componentDidMount(){
    //組件掛載後觸發（只會觸發一次，通常用來呼叫初始化ＡＰＩ等等）
  }

  componentWillUnmount(){
    //組件卸載時觸發
  }
}

Notfound.proptypes = {
}


const mapStateToProps = state => ({
  notfound: state.notfound
})

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(NotfoundActions, dispatch),
    ...bindActionCreators({push, replace, go, goBack, goForward}, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notfound)