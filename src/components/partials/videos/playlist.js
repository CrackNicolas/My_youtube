import { useState } from 'react';
import '../../../styles/partials/videos/playlist.css';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const reorder = (list, index_start, index_end) => {
    const result = [...list];
    const [removed] = result.splice(index_start, 1);
    result.splice(index_end, 0, removed);
    return result;
};

const handler = (result) => {
    const { source, destination } = result;
    if((!destination) || (source.index === destination.index && source.droppableId === destination.droppableId)) return ;
    return ((prev) => reorder(prev, source.index, destination.index) );
}

export default function ComponentVideosPlaylist({channel,videos}){
    const [videos_playlist, setVideos_playlist] = useState(videos);

    return (
        <section className='playlist'>
            <article className='presentation' style={{backgroundImage: "url("+videos_playlist[0].url_imagen+")"}}>
                <img src={videos_playlist[0].url_imagen}/>
                <div className='imagen'>
                    <div>
                        <ion-icon name="play"></ion-icon>
                        <span>REPRODUCIR TODO</span>
                    </div>
                </div>
                <article>
                    <div className='header'>
                        <span className='title'>Ver más tarde</span>
                        <span className='name'>{channel.title}</span>
                    </div>
                    <div>
                        <span>{videos_playlist.length} {(videos_playlist.length==1)? "video" : "videos"}</span>
                        <span>0 visualizaciones</span>
                        <span>Actualizada hoy</span>
                    </div>
                    <div>
                        <a href="">
                            <ion-icon name="play"></ion-icon>
                            <span>Reproducir todo</span>
                        </a>
                        <a href="">
                            <ion-icon name="shuffle-outline"></ion-icon>
                            <span>Aleatorio</span>
                        </a>
                    </div>
                </article>
            </article>
            <article className='list'>
                <div className='header'>
                    <div className='title'>
                        <ion-icon name="options-outline"></ion-icon>
                        <span>Ordenar</span>
                    </div>
                </div>
                <div className='body'>
                    <DragDropContext onDragEnd={(result) => setVideos_playlist(handler(result))}>
                        <Droppable droppableId='items'>
                            { (droppableProvided) => (
                                <div className='items' {...droppableProvided.droppableProps} ref={droppableProvided.innerRef}>
                                    {
                                        videos_playlist.map((video,index) => {
                                            return (
                                                <Draggable key={index} draggableId={""+index} index={index}>
                                                    { (draggableProvided) => ( 
                                                        <div className='item' {...draggableProvided.draggableProps} ref={draggableProvided.innerRef}>
                                                            <div {...draggableProvided.dragHandleProps} className='icon-left'>
                                                                <ion-icon name="reorder-two-outline"></ion-icon>
                                                            </div>
                                                            <a href="" className='video'>
                                                                <div className="imagen">
                                                                    <img src={video.url_imagen} alt={video.title}/>
                                                                    <div className="duration">
                                                                        <span>
                                                                            {video.duration}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="description">
                                                                    <p className="title">{video.title}</p>
                                                                    <div className="data">
                                                                        <span title={video.channel.title}>{video.channel.title}</span>
                                                                        <span>. {video.view_count}</span>
                                                                        <span>. {video.time_elapsed}</span>
                                                                    </div>
                                                                </div>
                                                            </a>
                                                            <div className='icon-right'>
                                                                <ion-icon name="ellipsis-vertical-outline"></ion-icon>
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>   
                                            )
                                        })
                                    }
                                    {droppableProvided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            </article>
        </section>
    )
}