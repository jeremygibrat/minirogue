
export enum TargetType {
    SELF,
    COMPANION,
    ENEMY,
}

export interface Target {
    type: TargetType;
}

abstract class Effect {
    constructor(public target: Target, public isActive: boolean) {
        this.isActive = isActive;
    }
    abstract shouldApply(): boolean;
    abstract apply(player: any): string[];

    getTarget(player: any, companion: any, enemy: any): any[] {
        switch (this.target.type) {
            case TargetType.SELF:
                return [player];
            case TargetType.COMPANION:
                return [companion];
            case TargetType.ENEMY:
                return [enemy];
        }
    }
}

export class HealthEffect extends Effect {
    constructor(public health: number, target: Target) {
        super(target, true); // L'effet est toujours actif par défaut
    }

    shouldApply(): boolean {
        return true; // L'effet doit toujours être appliqué
    }

    apply(player: any) {
        const results: string[] = [];
        results.push(`Player ${player.name} gained ${this.health}♡`);
        player.life += this.health
        return results;
    }
}
