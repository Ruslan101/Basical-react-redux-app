import { connect } from 'react-redux';
import Component_1 from '../component_1';
import mapStateToProps from '../../store/mapStateToProps';
import mapDispatchToProps from '../../store/mapDispatchToProps';

const COMPONENT_1_W = connect(mapStateToProps("Component_1"), mapDispatchToProps("Component_1"))(Component_1);

export default COMPONENT_1_W;