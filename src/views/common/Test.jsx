import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, replace, go, goBack, goForward } from 'react-router-redux'
import * as TestActions from '@actions/common/Test'

/**
 * @author
 * @name 
 * @class
 * @description
 */
export class Test extends Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  t = (key)=>(
    this.props.i18n[key] || key
  )

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
    const { t } = this
    return (
      <div className=''>
      <h1>Test</h1>
      <button className='ui button green' onClick={()=>{this.props.actions.push('/')}}>to home page</button>

      <div className="ui action input">
        <input type="text" placeholder="Search..." />
        <button className="ui icon button">
          <i className="filter icon"></i>
        </button>
      </div>

      <br/>
      <br/>

      <div className="ui buttons white">
        <button className="ui button active">{t('left')}</button>
        <button className="ui button">{t('center')}</button>
        <button className="ui button">{t('right')}</button>
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

Test.proptypes = {
}

Test.defaultProps = {
  //i18n預留
  i18n : {
  }
}


const mapStateToProps = state => ({
  test: state.test
})

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(TestActions, dispatch),
    ...bindActionCreators({push, replace, go, goBack, goForward}, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Test)