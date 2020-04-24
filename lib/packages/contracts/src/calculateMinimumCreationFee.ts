/**
 * Copyright (c) 2019 Burst Apps Team
 */

import {BurstValue} from '@burstjs/util';
import {countCodePages} from './countCodePages';

/**
 * Calculates the minimum creation fee of the contract
 *
 * @param hexCode The contracts code in hex form
 * @return The minimum fee expressed as BurstValue
 * @module contracts
 */
export function calculateMinimumCreationFee(hexCode: string ): BurstValue {
    const DataPages = 1; // no data supported yet, so we put minimum value
    return BurstValue.fromBurst(2 + countCodePages(hexCode) + DataPages);
}
