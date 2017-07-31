import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, replace, go, goBack, goForward } from 'react-router-redux'
import * as HomeActions from '@actions//Home'
import { test, notfound } from '@routes/index'
import './Home.css'
/**
 * @author
 * @name 
 * @class
 * @description
 */
export class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  t = (key)=>(
    this.props.i18n[key] || key
  )

  updateName = ({currentTarget}) => {
    const name = currentTarget.value
    this.props.actions.updateState({name})
  }

  clearName = () => {
    const name = ''
    this.props.actions.updateState({name})
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
    const { name } = this.props
    return (
      <div className='home container'>
        <h1>Home</h1>
        <div className="row">
          name: <span>{name}</span>
        </div>
        <div className="row">
          input: <input className='ui input' onChange={this.updateName} value={name}/>
        </div>
        <div className="row">
          <button className='ui button' onClick={this.clearName}>clear Name</button>
        </div>
        <div className="row">
          <button className='ui button' onClick={
            ()=>{this.props.actions.push(test)}}>to test page</button>
        </div>
        <div className="row">
          <button className='ui button' onClick={
            ()=>{this.props.actions.ajaxTest({id : '123456'})}}>ajax test</button>
        </div>
        <div className="row">
          <button className='ui button' onClick={
            ()=>{this.props.actions.twoAjaxTest({id : '123456'})}}>two ajax test</button>
        </div>
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

Home.proptypes = {
}

Home.defaultProps = {
  //i18n預留
  i18n : {
  }
}


const mapStateToProps = state => ({
  name: state.home.name
})

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(HomeActions, dispatch),
    ...bindActionCreators({push, replace, go, goBack, goForward}, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)