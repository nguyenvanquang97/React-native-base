export interface Service {
  id: number;
  name: string;
  appId: string;
  logo: string;
  banner: string;
  status: string;
  targetUser: number;
  appCatalog: string;
}

export interface ServiceGroup {
  id: number;
  name: string;
  description: string;
  image: string;
  createdDate: string;
  modifiedDate: string;
}
export interface NotificationData {
  channelId: string;
  color: string | null;
  data: {
    body: string;
    click_action: string;
    data_super: string;
    key_2: string;
    pattner_id: string;
    title: string;
    url: string;
  };
  finish: () => void;
  foreground: boolean;
  id: string;
  message: string;
  priority: string;
  smallIcon: string;
  sound: string | null;
  tag: string | null;
  title: string;
  userInteraction: boolean;
  visibility: string;
}