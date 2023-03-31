import Service_channels from '../service/channels/index.js';
import Schema_channel from '../schema/channel.js';

export default async function Load_channel_user(channel_user){
    let search_channel = await Service_channels.get_id_user(channel_user);
    return Schema_channel.push(search_channel.data.items[0]);
}