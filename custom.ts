/**
 * Custom Extension Library for Year 9 Computer Science
 * This maps your custom orientation logic natively into student workspaces.
 */
//% weight=100 color="#0fbc11" icon="\uf12e" block="CIS Utilities"
namespace cisUtils {

    /**
     * Rotates a player or agent to a specific compass heading.
     * Parameters:
     *  - who: The target entity ("@s" for self, "@c" for agent, etc.)
     *  - degree: The angle (0=South, 90=West, -90=East, 180=North)
     */
    //% block="set orientation of $who to $degree degrees"
    //% who.defl="@s"
    //% degree.defl=0
    export function setOrientation(who: string, degree: number): void {
        // Build the native teleport command using local string concatenation
        let command = "tp " + who + " ~ ~ ~ " + ("" + degree) + " 0";

        // Execute the command in-game
        player.execute(command);

        // Slight pause to let the entity settle into position
        loops.pause(5000);

        // Fetch and round the player's new orientation
        let direction = Math.round(player.getOrientation());

        // Broadcast the confirmation message to the chat
        player.say("Player rotated to: " + ("" + direction));
    }
}
