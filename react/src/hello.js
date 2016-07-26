//@todo: To divide into classes. Join method: onClickSort, onTotalNews, onClickVolume.

var PlayList = React.createClass({


    getInitialState:  function() {
        $.ajax({
            url: '/web',
            dataType: 'json',
            data: {page: '1', volume: '10', author: '', composition: '', year: '', sortiterm: 'author', sorttype:   'asc' },
            success: function(data) {
                return this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        })
        return {
                data: [],
                page: '1',
                volume: '10',
                author: '',
                style: '',
                year: '',
                sortiterm: 'author',
                sorttype:   'asc',
                visibleNext: false,
                viSiblePrev: false
        }
    },

    ajax: function(){
        $.ajax({
            url: '/web',
            dataType: 'json',
            data: {page: this.state.page, volume: this.state.volume, author: this.state.author, style: this.state.style, year: this.state.year, sortiterm: this.state.sortiterm, sorttype: this.state.sorttype},
            success: function (data) {
                this.setState({data: data});
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },



    onBtnClickHandler: function() {
        this.state.author = ReactDOM.findDOMNode(this.refs.myTestInput1).value;
        this.state.style= ReactDOM.findDOMNode(this.refs.myTestInput2).value;
        this.state.year= ReactDOM.findDOMNode(this.refs.myTestInput3).value;
        this.state.page= '1';
        this.ajax();
        },
        onClickVolume10: function () {
            this.state.volume = 10;;
            this.state.page= '1';
            this.ajax();
        },
        onClickVolume50: function () {
            this.state.volume = 50;
            this.state.page= '1';
            this.ajax();
        },

        onClickPrev: function () {
            this.setState({page: --this.state.page});
            this.ajax();
        },
        onClickNext: function () {
            this.setState({page: ++this.state.page});
            this.ajax();
        },
    onClickSortAuthor: function () {
            if (this.state.sortiterm == 'author')
            {
                if (this.state.sorttype == 'asc')
                    this.state.sorttype = 'desc';
                else
                    this.state.sorttype = 'asc';
            }
            else
            {
                this.state.sortiterm = 'author';
                this.state.sorttype = 'asc';
                this.state.page = '1';
            }
            this.ajax();
        },
    onClickSortComposition: function () {
        if (this.state.sortiterm == 'composition')
        {
            if (this.state.sorttype == 'asc')
                this.state.sorttype = 'desc';
            else
                this.state.sorttype = 'asc';
        }
        else
        {
            this.state.sortiterm = 'composition';
            this.state.sorttype = 'asc';
            this.state.page = '1';
        }
        this.ajax();
    },
    onClickSortStyle: function () {
        if (this.state.sortiterm == 'style')
        {
            if (this.state.sorttype == 'asc')
                this.state.sorttype = 'desc';
            else
                this.state.sorttype = 'asc';
        }
        else
        {
            this.state.sortiterm = 'style';
            this.state.sorttype = 'asc';
            this.state.page = '1';
        }
        this.ajax();
    },
        onClickSortYear: function () {
            if (this.state.sortiterm == 'year')
            {
                if (this.state.sorttype == 'asc')
                    this.state.sorttype = 'desc';
                else
                    this.state.sorttype = 'asc';
            }
            else
            {
                this.state.sortiterm = 'year';
                this.state.sorttype = 'asc';
                this.state.page = '1';
            }
            this.ajax();
        },



    render: function() {
        var data = this.state.data;
        var PlayListTemplate = data.map(function(item, index) {

                return (

                    < tr
                key = {index} >
                    < td >
                        {item.author}
                        </ td >
                        < td >
                        {item.composition}
                        </td >
                        < td >
                        {item.style}
                        </td >
                        < td >
                        {item.year}
                        </td >
                    < / tr >

            )

        })



        return (
            <div className="PlayList">
                <input
                    className='test-input1'
                    defaultValue=''
                    placeholder='исполнитель'
                    ref='myTestInput1'
                />
                <input
                    className='test-input2'
                    defaultValue=''
                    placeholder='Жанр'
                    ref='myTestInput2'
                />
                <input
                    className='test-input3'
                    defaultValue=''
                    placeholder='год'
                    ref='myTestInput3'
                />
            <button onClick={this.onBtnClickHandler} ref='alert_button'>Показать alert</button>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong
                                    className={'SortAuthor'}
                                    onClick={this.onClickSortAuthor}>
                                    Исполнитель
                                </strong>
                            </td>
                            <td>
                                <strong
                                    className={'SortComposition'}
                                    onClick={this.onClickSortComposition}>
                                    Композиция
                                </strong>
                            </td>
                            <td>
                                <strong
                                    className={'Sort'}
                                    onClick={this.onClickSortStyle}>
                                    Жанр
                                </strong>
                            </td>
                            <td>
                                <strong
                                    className={'year'}
                                    onClick={this.onClickSortYear}>
                                    Год
                                </strong>
                            </td>
                        </tr>
                        {PlayListTemplate}
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong
                                className={'Volume'}
                                onClick={this.onClickVolume10}>
                                10
                                </strong>
                            </td>
                            <td>
                                <strong
                                className={'Volume'}
                                onClick={this.onClickVolume50}>
                                50
                                </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong
                                className={'Page_' + (this.state.page > 1 ? '':'none') }
                                onClick={this.onClickPrev}>
                                Назад
                                </strong>
                            </td>
                            <td>
                                <strong
                                className={'Page_' + (data.length > 10 ? '':'none')}
                                onClick={this.onClickNext}>
                                Далее
                                </strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
});

var App = React.createClass({

    render: function() {

        console.log('render');
        return (
            <div className='app'>

                <h3>Плэйлист</h3>

                <PlayList />

            </div>
        );
    }
});

ReactDOM.render(
<App />,
    document.getElementById('root')
);


