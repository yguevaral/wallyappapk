
import { useEffect } from "react";
import HomeWebView from "./src/components/homeWebView";
import {
    PermissionsAndroid,

  } from 'react-native';

export default function App() {

    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
                PermissionsAndroid.PERMISSIONS.CAMERA,
              ],
              {
                title: 'Permisos Wally App',
                message:
                  'Para un mejor experiencia de uso' +
                  'Acepta los Permisos.',
                buttonNeutral: 'Preguntal Luego',
                buttonNegative: 'Cancelar',
                buttonPositive: 'OK',
              });

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('Permisos OK');
          } else {
            console.log('Permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
      };


    useEffect(() => {    
        requestCameraPermission();
    }, []);

    return <HomeWebView></HomeWebView>;
}



