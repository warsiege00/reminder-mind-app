import * as Notifications from 'expo-notifications';

interface IContent {
  title: string;
  body: string;
  data: {
    url: string;
  };
}

const scheduleNotification = async (content: IContent, interval: number) => {
  await checkAndRequestPermissions();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  await clearAllScheduledNotifications(); // Limpa notificações agendadas previamente

  await Notifications.scheduleNotificationAsync({
    content,
    trigger: { seconds: interval },
  });

  console.log(`Notification scheduled to trigger in ${interval} seconds`);
  checkScheduledNotifications();
};

const checkScheduledNotifications = async () => {
  const notifications = await Notifications.getAllScheduledNotificationsAsync();
  console.log("Scheduled Notifications:", notifications);
};

const clearAllScheduledNotifications = async () => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  console.log("All scheduled notifications have been cleared.");
};

const requestNotificationPermissions = async () => {
  const { status } = await Notifications.requestPermissionsAsync();
  return status;
};

const checkAndRequestPermissions = async () => {
  const { status } = await Notifications.getPermissionsAsync();

  if (status === 'undetermined') {
    const newStatus = await requestNotificationPermissions();
    if (newStatus === 'granted') {
      console.log("Notification permissions granted!");
    } else {
      console.log("Notification permissions denied.");
    }
  } else if (status === 'granted') {
    console.log("Notification permissions already granted.");
  } else {
    console.log("Notification permissions were previously denied.");
  }
};

export {
  scheduleNotification,
  checkScheduledNotifications,
  clearAllScheduledNotifications
};