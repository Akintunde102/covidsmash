
export interface IShareData {
  whatsAppMessage?: string;
  facebookShareURL?: string;
  facebookShareMessage?: string;
  twitterShareURL?: string;
  twitterShareMessage?: string;
  twitterViaAccount?: string;
  nativeShareTitle?: string;
  nativeShareMessage?: string;
  nativeShareURL?: string;
}

const data: IShareData  = {
  whatsAppMessage: 'testShare',
  facebookShareURL: 'testShare',
  facebookShareMessage: 'testShare',
  twitterShareURL: 'testShare',
  twitterShareMessage: 'testShare',
  twitterViaAccount: '@akintunde',
  nativeShareTitle: 'testShare',
  nativeShareMessage: 'testShare',
  nativeShareURL: 'testshareurl.com',
};

export default data;
