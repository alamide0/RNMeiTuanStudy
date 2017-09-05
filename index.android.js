/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { PureComponent } from 'react'
import { AppRegistry } from 'react-native'
import {StackNavigator} from 'react-navigation'
import HomeScene from './src/scene/Home/HomeScene'
import RootScene from './src/RootScene'
import CodePush from 'react-native-code-push'
import PagingEnableTest from './src/scene/ScrollView/PagingEnableTest'

let PO = class PO extends PureComponent {
  constructor () {
    super()
    this.state = {
      restartAllowed: true
    }
    this.syncImmediate = this.syncImmediate.bind(this)
    this.sync = this.sync.bind(this)
  }

  render () {
    return (
      <PagingEnableTest />
    )
  }

  codePushStatusDidChange (syncStatus) {
    switch (syncStatus) {
      case CodePush.SyncStatus.CHECKING_FOR_UPDATE:
        this.setState({syncMessage: '正在检查更新'})
        break
      case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
        this.setState({syncMessage: '下载更新中.....'})
        break
      case CodePush.SyncStatus.AWAITING_USER_ACTION:
        this.setState({syncMessage: '等待用户操作'})
        break
      case CodePush.SyncStatus.INSTALLING_UPDATE:
        this.setState({syncMessage: '正在安装更新'})
        break
      case CodePush.SyncStatus.UP_TO_DATE:
        this.setState({syncMessage: 'APP是最新版本，无需更新', progress: false})
        break
      case CodePush.SyncStatus.UPDATE_IGNORED:
        this.setState({syncMessage: '用户取消了操作', progress: false})
        break
      case CodePush.SyncStatus.UPDATE_INSTALLED:
        this.setState({syncMessage: '更新会在下次启动后启用', progress: false})
        break
      case CodePush.SyncStatus.UNKNOWN_ERROR:
        this.setState({syncMessage: '未知错误发生...', progress: false})
        break
    }
  }

  codePushDownloadDidProgress (progress) {
    this.setState({progress})
    var lod = this.state.progress.receivedBytes / 1048576
    lod = lod.toFixed(2)
    var comp = this.state.progress.totalBytes / 1048576
    comp = comp.toFixed(2)
    // alert(lod+' of '+comp+'MBit received');
    // alert('adas');
    this.refs.toast.show(lod + ' of ' + comp + 'MBit received')
  }

  toggleAllowRestart () {
    this.state.restartAllowed
      ? CodePush.disallowRestart()
      : CodePush.allowRestart()

    this.setState({
      restartAllowed: !this.state.restartAllowed
    })
  }

  getUpdateMetadata () {
    CodePush.getUpdateMetadata(CodePush.UpdateState.RUNNING).then((metadata) => {
      this.setState({
        syncMessage: metadata
          ? JSON.stringify(metadata)
          : 'Running binary version',
        progress: false
      })
    }, (error) => {
      this.setState({
        syncMessage: 'Error: ' + error,
        progress: false
      })
    })
  }

  sync () {
    CodePush.sync({}, this.codePushStatusDidChange.bind(this), this.codePushDownloadDidProgress.bind(this))
  }

  syncImmediate () {
    CodePush.sync({
      installMode: CodePush.InstallMode.IMMEDIATE,
      updateDialog: {

        appendReleaseDescription: true, // 是否显示更新description，默认为false

        descriptionPrefix: '更新内容： ', // 更新说明的前缀。 默认是” Description:

        mandatoryContinueButtonLabel: '立即更新', // 强制更新的按钮文字，默认为continue

        mandatoryUpdateMessage: '该更新是必要更新，请安装后在使用', // - 强制更新时，更新通知. Defaults to “An update is available that must be installed.”.

        optionalIgnoreButtonLabel: '忽略', // 非强制更新时，取消按钮文字,默认是ignore

        optionalInstallButtonLabel: '立即更新', // 非强制更新时，确认文字. Defaults to “Install”

        optionalUpdateMessage: '', // 非强制更新时，更新通知. Defaults to “An update is available. Would you like to install it?”.

        title: '应用需要更新' // 要显示的更新通知的标题. Defaults to “Update available”.

      }
    }, this.codePushStatusDidChange.bind(this), this.codePushDownloadDidProgress.bind(this))
  }

  componentDidMount () {
    this.syncImmediate()
  }
}

let codePushOptions = {
  checkFrequency: CodePush.CheckFrequency.MANUAL
}

PO = CodePush(codePushOptions)(PO)

// const Simple = StackNavigator(
//     {
//         Home: {screen: HomeScene},
//     }
// );

AppRegistry.registerComponent('PO', () => PO)
