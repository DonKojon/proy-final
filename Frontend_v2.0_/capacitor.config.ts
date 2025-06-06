import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'tienda',
  webDir: 'dist/tienda/browser/',
  server:{
    androidScheme: 'https',
    cleartext:true,
    allowNavigation: ['172.24.98.81'],
  },
  plugins: {
    CapacitorHttp: {
      enabled: true
    }
  }
};


export default config;
