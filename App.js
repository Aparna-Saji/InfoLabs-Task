import axios from 'axios';

import { NativeBaseProvider, Box, Text, VStack, HStack, ChevronLeftIcon, Stack, Image, FlatList } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { View } from 'react-native'
import { useState } from 'react';

const App = () => {
  const [productData,setProductData]=useState([]);
  

  const getAllProduct= async()=>{
    axios.get('URL')
    .then((res)=>{
      console.log("RESPONSE=======",res);
    })
    .catch((e)=>{
      console.log("ERR",e);
    })
  }

  const Header = () => {
    return (
      <HStack mt={12} pl={4} alignItems='center' >
        <ChevronLeftIcon color='white' size={18} />
        <Text ml={2} fontSize={18} color='white' fontWeight='bold' >BEAUTY PARLOUR</Text>
      </HStack>
    )
  }


  return (
    <NativeBaseProvider>
      <Box flex={1} bg='#33b7b0'>
        <Header />

        <Box flex={1} mt={4} bg='white' borderTopLeftRadius={35} borderTopRightRadius={35} px={4}>


          <Box py={2} w='100%' mt={8} bg='white' borderRadius={8} style={{ elevation: 8 }}  >
            <HStack w='100%' px={4} alignItems='center' >
              <Box style={{height:50,width:80}} bg='red.400' borderRadius={4} >
                <Image h='100%' w='100%' alt='img' source={{uri:'https://infonlive.com/storage/company_logo/624c427f8abe9.png'}}/>
              </Box>
              <VStack ml={4} >
                <Text fontSize={18} color='#000' fontWeight='bold' >BEAUTY PARLOUR</Text>
                <HStack>
                  <Icon name="home" size={18} color='orange' />
                  <Text pr={2} fontSize={12} color='#000'  >Near fwhdgwgedw</Text>
                </HStack>
                <HStack>
                  <Icon name="location-on" size={18} color='orange' />
                  <Text pr={2} fontSize={12} color='#000'  >Nadakavu,Kozhikode</Text>
                </HStack>
              </VStack>
            </HStack>

            <HStack w="100%" justifyContent='space-around' px={2} mt={2} >
              <Image alt='sample' h={7} w={7} source={{ uri: 'https://www.pngitem.com/pimgs/m/27-274866_phone-png-blue-phone-icon-png-blue-transparent.png' }} />
              <Image alt='sample' h={7} w={7} source={{ uri: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png' }} />
              <Image alt='sample' h={7} w={7} source={{ uri: 'https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-circle-512.png' }} />
              <Image alt='sample' h={8} w={8} source={{ uri: 'https://images.cdn3.stockunlimited.net/preview1300/globe-icon_2004997.jpg' }} />
              <Image alt='sample' h={7} w={7} source={{ uri: 'data:image/png;base64,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' }} />
              <Image alt='sample' h={7} w={7} source={{ uri: 'https://img.lovepik.com/free-png/20210926/lovepik-map-location-icon-free-vector-illustration-png-image_401494181_wh1200.png' }} />

            </HStack>
          </Box>





          <FlatList
            data={[
              {
                id: 1

              },
              {
                id: 2
              }
            ]}
            contentContainerStyle={{paddingVertical:10,paddingHorizontal:10}}
            ItemSeparatorComponent={
              <Box h={4} w='100%' />
            }
            keyExtractor={(item) => item.id}

            renderItem={({ item }) => (
             
              <Box py={2} w='100%'  bg='white' borderRadius={8} style={{ elevation: 8 }}  >
            <HStack w='100%' px={4} alignItems='center' >
            <Box style={{height:50,width:80}} bg='red.400' borderRadius={4} >

              </Box>
              <VStack ml={4} >
                <Text fontSize={18} color='#000' fontWeight='bold' >TEST</Text>
                <HStack>
                  <Icon name="home" size={18} color='orange' />
                  <Text pr={2} fontSize={12} color='#000'  >Near fwhdgwgedw</Text>
                </HStack>
                <HStack>
                  <Icon name="location-on" size={18} color='orange' />
                  <Text pr={2} fontSize={12} color='#000'  >Nadakavu,Kozhikode</Text>
                </HStack>
              </VStack>
            </HStack>

            <HStack w="100%" justifyContent='space-around' px={2} mt={2} >
              <Image alt='sample' h={7} w={7} source={{ uri: 'https://www.pngitem.com/pimgs/m/27-274866_phone-png-blue-phone-icon-png-blue-transparent.png' }} />
              <Image alt='sample' h={7} w={7} source={{ uri: 'https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-mobile-software-icon-png-image_6315991.png' }} />
              <Image alt='sample' h={7} w={7} source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAADmCAMAAABruQABAAAAkFBMVEX9fyv29vb+/v79fSf6eBj///r948/4i0L9eyL4s4b4pnP2+Pn29vX9fSb+/v329/n11cD79e74eRv7+fX9dxT76tz12cX3fSf5xaT//PT3qnv67+X2hDf79Oz3tYv2j0z2mmD1k1L2gTD72sD4v5r5y6z2n2j4u5T2l1r969n77OD5yar2i0T73MP60rb2rn41ptgfAAANx0lEQVR4nO2dCXOiPBjHtaQYjUiFIlTB+6pt6ff/dm8CUgMk4QpC3tn/7OzsdtrKjyd5jpyD4f9Xg64foEX9Y1NT/9jU1D82NfWPra6m978RMvGfWIio1U9N1C5bxIHs+er2qeuLWLr+eVvN7ekDcdrSp7fFFjEFzuJ0WW43o71rAfAeCwDL3Y822+XltHDmdotWbIONYK0W3vLqYyIIoaZpA1raQDMMCAGm9K9Lb7Gy2+GTzUa4nNPvzsVURhqJJc3AiO7u9+S0wCeVDaHpKhx/W6Ww0oDW9zhcJXiSOqA8NoRmjrc1MFcFrIcwn7H1nBkyh7LgJLHhN37zdhisFlcijLfzbtIaZ1O26A0jFIRntyHY3XzAPYdBZLzGam43HIz1sQ9glR4mkgaBP9ZnEmzXmA3Z4daSBpbgWdvQbtw0m7Hhxvi1kdIWs4Jg8xU0pGvEhgJvBOq5xWIZYOStCFxtp9mADc09H8htjGlpwPfmDWxXmw3Zp1GrZETYdicb1TVdTTY0e9u11hppaWD3Y9c0XT025EysNjwIS4Y1cerBVWabkuZ4dJ9FNiARwT3adYJ5dbvhUL1pvaNl6MBGr+FTKrOhYG09o6OlZVjreWW4qmzEaE8nG9xN1yobsi8dGC2WYSW9rmxEKMsW5/u37ZN7Wkpge6tkuip2Qwf/ie6RIegfqsCVZ8Pt0eiqPSbSrEuFQF6aDQWTLttjAgcmgVm2x5VlQ86m2/aYCO5KZykl2dCi4672EPQXJeHKsaHQ7bqrPWS4YTm4UmyzL6v7rvaQZn2VgivDNjv2wIvQ0sCxTFFXzIbsdc/QCNy6RGVQzIbRukZhCMMVtstCtn6iRXAN2dCsp2gEbjacCvtcEduxr2gY7jhrYjf01V807FAKQoGQDYW9imtZaZY4iIvY0MLtMxqGc4Xpl4ANOX5/Ei22DN8RhDk+Gwp2fUmP+YK7gG85Pps96T8adpYTfpjjsqFLj10kJZxa8oIcjw0deu0iH9Is7hgKh8287dVAw3B73ugXh83eqtDZYsEtp8ux2fqcauUVVXNl2ZBeaV1P19IM3WT5ExYbmm/6HrTTMjbMiRAmW2/rGp7AuiSbqSvi/h/SLJ2Re+XZkK1ArpUV3BFfOS1kU8pHJmKNfOXYTKfnhQ1b2j4/lJ5jmymRIucF80lzls38sbp+ypqyfrKGy7Kp6Ehixe5EwIZCFR1JLHBCQrb5t1oZCS3jey5iQ566ZsOG8xCfDQW9H/0RSfPTgydpNqXNljNcim3+rWLYfsj4Dnhs6MQxG9k60y9xAhU4mRw2m1O2gXOo90vhlp1hGBubzYYObLNZ3kv/5LHhAD3oRbOdmZaGl6458pq9vIzZD3tmsiGd+So0/6NrEqZW7EFGi1qJSLGt2W9iEv+uWbcoeXFa2fqxpeDBFvjMF6HtTkHXGFnh97z62rAf1w/yduNmyQbYe69d02T0etzz1oVQ841/bDO2jaN3ATY/XdOkdPjmr3iB51mWzbyJhhIMMPnsGuhPzlm060Jz/6YHEjbECRjJT0D38tG5PyGf/3Ep2JvwSCoTttm1oALQwCjsmg3ThX5ROm9cZ2k/iW7FwyQG2HbdMD+vJZaWWUmjTNj41Y32MCi0xl3Gg+CX2gSkcSH/GuWdbcqdbzOu9LsC+1NX8eD1a/94/xq47nhw8Dyl2dDK5b0FuH7x9tTrAjv9pYss5WeTesVfgnFUd4VoNv7wFhzjJIBuDBBMbk8nu01Atmvw2UCYYvvlfiNhe3nR6YYJ3eNz8+cPek+adndpfDb4S7PZ7OTswZZ2vjgeHNonStr97EBt/iShKP4yn41UqNOEDUeAIjb88ta0l3o/PysefG7fqSZjXZImI5i3uEeBmI03UEKzZZIdaK2f0TCDMTU2YtBdXcB273CDgu5Gs+EkNeWs/NbjwevJpztaKmUXsN07XMRm7/gJV4ot3asNcI3iQWsBQaf3IsNMqSVgM+Jpj0Ec3fiZTJoNx4Ml1Uig9btqCyzzSSD7SQI2bR9FuIhtIcg/s2y5t9lSPMj4/aiFlGUbgMUfm2ioPM9GegEdD9ooXGd0+akBPyTNMd32hWzeH9tS8G0Ztvj3B3Q8aKFw/TynGv5lzvgeERtcJmwiV8KyW/Tp21Q8uMhsmB+X1JvjRFIRW+xMCNucPcIlZMOJSqbVyPKWr6FP/+JvXgYkYtN8sghqQNZci+pSHlvc26mHkFS4pjNXgacSrqewnDubyE0K2HCiMkl1CwmFa7risJYkDZm9MGsqIdv74s52eq/Jlq6qtMaF66uXKj93Ob9fnu10ZxOuuhazkWqYapjvm/hxqvc98hM/lTI6IVs0dD4oCAFFbCSbtTjZbDU5+fKzAdsyZpsKh+8K2aLuTz1VvcI1Nex4d0xi64vZttOITVCYlmN7eUm77ah6rNYsGb+gSEI2XJ4iwsaZwKnChl+7QTdM8torwNHDjlpZwwvZcIDDdpsizixdJbZsd3HX5eNBzQ4rZiOVwGCIbtzxuyps2Xjgn8oZ7vWLX37WZxuQGY8BWZ4shy0dnoyC8HRvtD+799SwY/kAKWYjc8ODgrSkCls+rSgqXG9Lq3ZiI2YjFZxctnQ80HA6KLJDZoBiW2DnOmxvopSrKhtO4/d0t9vwBzKz5WfFZEbM9v5mymRLctqPdZny6zM1IOhWLwCfylbluYN1Kh5OnOof0hFbfrgj3d7IgEuZ8rN3bDGGyE9k8k+v3nhEV3YjWqX9+2/A/nphnOgjWzSQSQ8PRMPCr/REpcEYdpTKZkqNbym9nvaZfCpVfsJGdXpRfDOlx+6M0nmwtbHkTQSVit3S8kmmUtNnj39x454ktns+6UiqAziahfkzb+v6/fJsrhO1SdEsjgQ2xjIlKRPm4vrNXUmruwuUXmYAJjImtgrq7iAeLxHuCpDCRhWuRcOOpSVmI3tzCFvTca5SIoFNI2VPhfJTKPFY0NWOxyfFo2GS2KLCFRjyFoSJn3pyH3tlL0eXzEbSzNVC4gxygUXubMIdRtLsJnvKX8gWTZwOpkNTmFDKa5OSV7iJ5zpwOknsZn4+xW6yVW7+TTj4qiSbtl+Z9/lu0bEXarJFq9WidQrCKX8V2eAZTe9rMESTi2qyXf7Wl3A2vqnLFi/Ei9hECxWUZDOchE24Y11FNuN7/lj3KlqLqCBblE0mbILjWFRku+9+iNn0/xmb/mATrehSkC2a7P5jmwoW26vHBif0PiqTX+YoyJZsNrqz8SOcgmzW/aDU+z4qfrqsHpuWHDyQ7H9jb+5Wkg2uM3v7uFFAPTagp9mG9ogTBZRjM3w7td90ym+UyrH9NcnH/m7ebI5ybI/TIv725fM8pWps1PEsj/MUOPmyamzU4a8PNs75hYqxaa6TZ+MdFgGXXUNwxHlc6uCZB5vJHjXRvl87P0eBpY8R0z+Ag8lg44wsaKDM4uHni72NNHUmHn0WErsY0PZdn6LAks72DqmT1Wg2zti55nqr135pdWSj3Tcs5tm4uYkG3FG/5HKOw4Cpc5ZTbNxjbDVD65N4J5LTASDDJtwLrYKi2VIe26eS5w8nypgte26o0oZLzohgsyl6cHQszc1cKJM9p1e5I+gfyh1Gn2UTb87ps9KxjcGm8JGv2VN6GeeZz4W74forYzPPouTY0JuahmNck5O/P0AwN9BjJXMAYjbkKOhO4guACu99UNKd5B0Jm21oX1VrlXDLuhGUxWaqllZmE0kBm3KtktkiefdR2fwDUnsoeGZftsW5a2slXHveL+WTLSEbudqu60cuLevAuU+Se2+fIlcS8u6iErKpcrsd92Y7wV2S5oo9cNszGaNV5bskyTSxAlFOc3VeixTfSxv2358IbxQW3ifc+xvFeDctFrMNp+MSxxl3KDAW3uAtvuPanvTZcmDCypBLsg3RvMclAdzOBZdAF7L1+TJoeA3EaEVsOLPsKRzcrQrQCtmG6NZLOIwm7Gul2HCCsukfXAmrlWHDzfLaN28JrgHKjvzUYhuawblfcOAsuEm+GtvQnC/7FMTBUhzXKrENh/a6N3AaWM9KoZVlG86+enLJsGF8CROtGmxD9OP3wV1CP3eNaXO2IXJ23XsUsGOORDZlw8ll1x5FA7/MS8gbspFggtCp4N6ddgXdU0kvUo0tFvrcdWc6sPtEf+9ZPhtul2urmyEiw1pXaY812HC7/Bl14VLAaFGRrDpbbLpn9zpY3Wi12LDp9DLXQskTOc4FVUerw0bGUegTxNoW3Ht2cUEji41UrL8WfIrtoPV7q2O0+mykYZ6f0O2gddZRLaM1YCN0h6vockAJMsD1p6bNmrGRbhfuWrQdtK6hnV9Z8Rw2QnfYgnb6HQTbQz0XIokt6ncT3sro+tKgO9HLFdctsg2HJrpdRrwLteuBgdEl9o21m6MkNmK7eXh2JfkVA7jncN7AgzzUlO3+ZhG6eVercdeDwLp6dcNZTjLsFgkh2/Gubn083BTdq+fYssgksg1Jz7Od08SvYT7MZfmTUwLWrJv9SSbbkOChYHE87yGAvM0XWSwDc+3Pno77mDSLxZLMRoSfca6fxte9BQCEGvuSVY1AQYCxruNTC1xELbAR4Wedzp3Dcbzd+C5mxJCU8P8td785/x4PTjBthYuoJTYsRADR1A4c/S30LuPxMtZ4ffTCN90JbBu1hhWpPbY/IWSirEwUJYqSnAZHT2DrTP/Y1NT/me0/AiZn2SdLvAEAAAAASUVORK5CYII=' }} />

            </HStack>
          </Box>
            )}
          />

        </Box>




      </Box>
    </NativeBaseProvider>
  )
}

export default App

