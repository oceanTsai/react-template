import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push, replace, go, goBack, goForward } from 'react-router-redux'
import * as GuidelineActions from '@actions/ui/Guideline'
import numeral from 'numeral'

/**
 * @author
 * @name 
 * @class
 * @description
 */
export class Guideline extends Component {

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
    const t = this.t
    return (
      <div className=''>
      Guideline
      <span>Three</span>
        <div className="ui secondary pointing menu">
          <a className="active item">
            {t('buy')}
          </a>
          <a className="item">
            {t('sell')}
          </a>
          <a className="item">
            {t('inquiry')}
          </a>
        </div>

        <br/>
        <br/>

        <div className='ui container'>
          <div className="ui action input">
            <input type="text" placeholder="Search..." />
            <button className="ui icon button">
              <i className="filter icon"></i>
            </button>
          </div>

          <br/>
          <br/>

          <div className="ui buttons white">
            <button className="ui button active">{t('commonStock')}</button>
            <button className="ui button">{t('marginPurchase')}</button>
            <button className="ui button">{t('shortSale')}</button>
          </div>

          <div className="ui buttons white">
            <button className="ui button active">{t('commonStock')}</button>
            <button className="ui button">{t('marginPurchase')}</button>
            <button className="ui button">{t('shortSale')}</button>
          </div>


          <br/>
          <br/>

          <button className='ui button white'>
            <p>{t('firstBuy')}</p>
            <p>{t('dayTrading')}</p>
          </button>

          <br/><br/>

          <div className="ui right labeled input buttons white">
            <button className="ui active button">
              <i className="icon minus"></i>
            </button>
            <div className="ui left action input">
              <input className='' type='text'  />
            </div>            
            <button className="ui active button">
              <i className="icon plus"></i>
            </button>
          </div>

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

Guideline.proptypes = {
}

Guideline.defaultProps = {
  i18n: {
    buy: '買進',
    sell: '賣出',
    inquiry: '委託查詢',
    commonStock: '現股',
    marginPurchase: '融資',
    shortSale: '融券',
    firstBuy:'先買',
    dayTrading: '現沖'
  }
}

const mapStateToProps = state => ({
  guideline: state.guideline
})

const mapDispatchToProps = dispatch => ({
  actions: {
    ...bindActionCreators(GuidelineActions, dispatch),
    ...bindActionCreators({push, replace, go, goBack, goForward}, dispatch)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Guideline)