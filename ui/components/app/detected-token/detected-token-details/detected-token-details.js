import React from 'react';
import PropTypes from 'prop-types';

import Box from '../../../ui/box';
import Identicon from '../../../ui/identicon';
import DetectedTokenValues from '../detected-token-values/detected-token-values';
import DetectedTokenAddress from '../detected-token-address/detected-token-address';
import DetectedTokenAggregators from '../detected-token-aggregators/detected-token-aggregators';
import { DISPLAY } from '../../../../helpers/constants/design-system';

const DetectedTokenDetails = ({ token, handleTokenSelection }) => {

  return (
    <Box display={DISPLAY.FLEX} className="detected-token-details" marginBottom={4}>
      <Identicon
        className="detected-token-details__identicon"
        address={token.address}
        diameter={40}
      />
      <Box
        display={DISPLAY.GRID}
        marginLeft={2}
        className="detected-token-details__data"
      >
        <DetectedTokenValues token={token} handleTokenSelection={handleTokenSelection} />
        <DetectedTokenAddress address={token.address} />
        <DetectedTokenAggregators aggregatorsList={token.aggregators} />
      </Box>
    </Box>
  );
};

DetectedTokenDetails.propTypes = {
  tokenAddress: PropTypes.string,
  handleTokenSelection: PropTypes.func.isRequired
};

export default DetectedTokenDetails;
