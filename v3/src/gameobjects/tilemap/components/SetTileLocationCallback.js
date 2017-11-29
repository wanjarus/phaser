var GetTilesWithin = require('./GetTilesWithin');

/**
 * Sets a collision callback for the given rectangular area (in tile coordindates) within the layer.
 * If a callback is already set for the tile index it will be replaced. Set the callback to null to
 * remove it.
 *
 * @param {number} [tileX=0] - [description]
 * @param {number} [tileY=0] - [description]
 * @param {number} [width=max width based on tileX] - [description]
 * @param {number} [height=max height based on tileY] - [description]
 * @param {function} callback - The callback that will be invoked when the tile is collided with.
 * @param {object} callbackContext - The context under which the callback is called.
 * @param {LayerData} layer - [description]
 */
var SetTileLocationCallback = function (tileX, tileY, width, height, callback, callbackContext, layer)
{
    var tiles = GetTilesWithin(tileX, tileY, width, height, null, layer);

    for (var i = 0; i < tiles.length; i++)
    {
        tiles[i].setCollisionCallback(callback, callbackContext);
    }

};

module.exports = SetTileLocationCallback;
