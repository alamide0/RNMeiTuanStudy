import React, { PureComponent } from 'react'
import { View } from 'react-native'
import SpecialChoiceComponent from './SpecialChoiceComponent'
import api from '../../api'
import color from '../../widget/color'

class FindScene extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      special: []
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    let response = await fetch(api.find)
    let json = await response.json()
    let specialList = json.data.banner.map((info) => {
      return {
        img: info.image,
        name: '网红爆款新生儿爬服',
        price: '39元起',
        introd: '爱买买，不爱买拉倒'
      }
    })

    this.setState({
      special: specialList
    })
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <SpecialChoiceComponent items={this.state.special} />
      </View>
    )
  }
}

export default FindScene
