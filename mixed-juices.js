// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
    switch(name){
      case 'Pure Strawberry Joy':
        return .5;
        break;
      case 'Energizer':
      case 'Green Garden':
        return 1.5;
        break;
      case 'Tropical Island':
        return 3;
        break;
      case 'All or Nothing':
        return 5;
        break;
      default:
        return 2.5;
    }
  }
  
  /**
   * Calculates the number of limes that need to be cut
   * to reach a certain supply.
   *
   * @param {number} wedgesNeeded
   * @param {string[]} limes
   * @returns {number} number of limes cut
   */
  export function limesToCut(wedgesNeeded, limes) {
    let limesAlreadyCut = 0;
    let allLimes = limes.length;
    let wedgesCut = 0;
    while ((limesAlreadyCut < allLimes) && (wedgesCut < wedgesNeeded)) {
      switch(limes[0]){
          case 'small':
            wedgesCut += 6;
            break;
          case 'medium':
            wedgesCut += 8;
            break;
          case 'large':
            wedgesCut += 10;
            break;
      }
      limesAlreadyCut += 1;
      limes.shift();
      if (limesAlreadyCut > allLimes){
        return allLimes
      }
    }
    return limesAlreadyCut;
  }
  
  /**
   * Determines which juices still need to be prepared after the end of the shift.
   *
   * @param {number} timeLeft
   * @param {string[]} orders
   * @returns {string[]} remaining orders after the time is up
   */
  export function remainingOrders(timeLeft, orders) {
    do {
        let timeForOrder = timeToMixJuice(orders[0]);
        if (timeForOrder <= timeLeft){
          timeLeft -= timeForOrder;
          orders.shift();
        } else {
          orders.shift();
          break;
        }
    } while ((timeLeft > 0) && (orders.length > 0));
    console.log(orders);
    return orders;
  }