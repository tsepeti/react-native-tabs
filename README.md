# rnative-tabs

<p align="center">
    <img src="capture.gif" width="50%" align="center"/>
</p>

### Install

    yarn add rnative-tabs
    
### Using

```JS

const TabList = [
  {
    name: 'Ana Sayfa',
    view() {
      return (
        <View>
          <Text>Merhaba burası ana sayfa!</Text>
        </View>
      )
    }
  },
  
  {
    name: 'İletişim',
    view() {
      return (
        <View>
          <Text>Merhaba burası İletişim!</Text>
        </View>
      )
    }
  }
]


<RnativeTabs
  ref="tab"
  list={TabList}
/>
```
