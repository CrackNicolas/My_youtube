import Service_channels from '../service/channels/index.js';
import Schema_channel from '../schema/channel.js';

export default async function Load_channel(id_video){
    let search_channel = await Service_channels.get_id(id_video);
    return Schema_channel.push(search_channel.data.items[0]);
}