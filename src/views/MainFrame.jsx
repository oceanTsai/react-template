import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
 * 頁面主要框架
 */

//TODO : 這層要處理 login 如果沒有登入就導登入頁
//TODO : 需要bind redux check login props 
//TODO : 或許推翻以上，可以在各頁面自己判斷，就安全性來說 每個換頁都該確認 操作權限 與 登入狀態
//如果沒有登入權限就跳回登入頁面


export default class MainFrame extends Component {
	static propTypes = {
		children: PropTypes.element
	}
	render () {
		return (
			<div className='mainFrame'>
				{
					//header
				}
				<div className='view'>
					{this.props.children}
				</div>
				{
					//footer
				}
			</div>
		)
	}
}

MainFrame.proptypes = {
	 children: PropTypes.element
}
