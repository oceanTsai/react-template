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
    return (
      <div className='ui container'>
      Notfound
      <div>
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

Notfound.proptypes = {
}

Notfound.defaultProps = {
  //i18n預留
  i18n : {
  }
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