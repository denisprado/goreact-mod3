import React, { Fragment, Component } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as FavoriteActions from '../../store/actions/favorites'

class Main extends Component {
    state = {
        repositoryInput: ''
    }

    handleAddRepository = () => {
        this.props.addFavorite()
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleRepository} >
                    <input
                        placeholder="usuário/repositório"
                        value={this.state.repositoryInput}
                        onChange={e =>
                            this.setState({
                                repositoryInput: e.target.value
                            })} />
                    <button type="submit">Enviar</button>
                </form>

                <ul>
                    {this.favorites.map(favorite => {
                        <li key={favorite.key}>
                            <p>
                                <strong>{favorite.name}</strong> ({favorite.description})
                            </p>
                            <a href={favortes.url} >Acessar</a>
                        </li>
                    })}
                </ul>

            </Fragment>
        )

    }
}

const mapStatetoProps = state => ({
    favorites: state.favorites
})

const mapDispatchToProps = dispatch =>
    bindActionCreators(FavoriteActio ns, dispatch);

export default connect(mapStatetoProps, bindActionCreators)(Main)