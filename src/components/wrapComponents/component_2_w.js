import { connect } from 'react-redux';
import Component_2 from '../component_2';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const COMPONENT_2_W = connect(mapStateToProps("Component_2"), mapDispatchToProps("Component_2"))(Component_2);

export default COMPONENT_2_W;