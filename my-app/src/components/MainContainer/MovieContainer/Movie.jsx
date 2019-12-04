import React from 'react';
import s from './MovieContainer.module.css';
import Select from 'react-select';
import { Container, Row, Col, FormGroup, InputGroup, FormControl, Button, Table } from 'react-bootstrap';



export let Movie =(props)=>{
    return (
      <div>
        <Container>
            {/* Фильтры. */}
            <Row className="show-grid">
                <Col xs={3}>
                    <Select
                        name="format"
                        value={props.format}
                        onChange={props.handleFormatChange}
                        clearable={false}
                        options={[
                            { value: 'movie', label: 'Фильм' },
                            { value: 'tvseries', label: 'Сериал' },
                        ]}
                    />
                </Col>
                <Col xs={3}>
                    <Select
                        name="genre"
                        value={props.genre}
                        onChange={props.handleGenreChange}
                        clearable={false}
                        options={[
                            { value: 12, label: 'Приключения' },
                            { value: 16, label: 'Мультфильм' },
                            { value: 35, label: 'Комедия' },
                            { value: 53, label: 'Триллер' }
                            // При желании можете добавить и остальные жанры...
                            // 28	боевик
                            // 12	приключения
                            // 16	мультфильм
                            // 35	комедия
                            // 80	криминал
                            // 99	документальный
                            // 18	драма
                            // 10751	семейный
                            // 14	фэнтези
                            // 36	история
                            // 27	ужасы
                            // 10402	музыка
                            // 9648	детектив
                            // 10749	мелодрама
                            // 878	фантастика
                            // 10770	телевизионный фильм
                            // 53	триллер
                            // 10752	военный
                            // 37	вестерн
                        ]}
                    />
                </Col>
                <Col xs={3}>
                    <Select
                        name="year"
                        value={props.year}
                        onChange={props.handleYearChange}
                        clearable={false}
                        options={[
                            { value: '2010', label: '2010' },
                            { value: '2011', label: '2011' },
                            { value: '2012', label: '2012' },
                            { value: '2013', label: '2013' },
                            { value: '2014', label: '2014' },
                            { value: '2015', label: '2015' },
                            { value: '2016', label: '2016' },
                            { value: '2017', label: '2017' },
                            { value: '2018', label: '2018' },
                        ]}
                    />
                </Col>
                <Col xs={3}>
                    <FormGroup>
                        <InputGroup>
                            <FormControl type="text" onChange={props.handleSearchInputChange} />
                                <Button onClick={props.handleSearchButtonClick}>Search</Button>
                        </InputGroup>
                    </FormGroup>
                </Col>
            </Row>

            {/* Таблица. */}
            <Row>
                <Col xs={12}>
                    <Table className="movies" bordered condensed hover>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Название</th>
                                <th>Формат</th>
                                <th>Дата релиза</th>
                                <th>Рейтинг</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                              props.result.map((item, index) => (
                                    <tr key={index}>
                                        <td className="poster-cell"><img src={`http://image.tmdb.org/t/p/w92/${item.poster_path}`} /></td>
                                        <td>{item.title}</td>
                                        <td>Кино</td>
                                        <td>{item.release_date}</td>
                                        <td>{item.vote_average}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </div>
    )
};
