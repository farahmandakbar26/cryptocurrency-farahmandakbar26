import * as React from 'react'
import { UncommittedChangesStrategy } from '../../models/uncommitted-changes-strategy'
import { DialogContent } from '../dialog'
import { Checkbox, CheckboxValue } from '../lib/checkbox'
import { RadioButton } from '../lib/radio-button'

interface IPromptsPreferencesProps {
  readonly confirmRepositoryRemoval: boolean
  readonly confirmDiscardChanges: boolean
  readonly confirmDiscardChangesPermanently: boolean
  readonly confirmDiscardStash: boolean
  readonly confirmCheckoutCommit: boolean
  readonly confirmForcePush: boolean
  readonly confirmUndoCommit: boolean
  readonly uncommittedChangesStrategy: UncommittedChangesStrategy
  readonly onConfirmDiscardChangesChanged: (checked: boolean) => void
  readonly onConfirmDiscardChangesPermanentlyChanged: (checked: boolean) => void
  readonly onConfirmDiscardStashChanged: (checked: boolean) => void
  readonly onConfirmCheckoutCommitChanged: (checked: boolean) => void
  readonly onConfirmRepositoryRemovalChanged: (checked: boolean) => void
  readonly onConfirmForcePushChanged: (checked: boolean) => void
  readonly onConfirmUndoCommitChanged: (checked: boolean) => void
  readonly onUncommittedChangesStrategyChanged: (
    value: UncommittedChangesStrategy
  ) => void
}

interface IPromptsPreferencesState {
  readonly confirmRepositoryRemoval: boolean
  readonly confirmDiscardChanges: boolean
  readonly confirmDiscardChangesPermanently: boolean
  readonly confirmDiscardStash: boolean
  readonly confirmCheckoutCommit: boolean
  readonly confirmForcePush: boolean
  readonly confirmUndoCommit: boolean
  readonly uncommittedChangesStrategy: UncommittedChangesStrategy
}

export class Prompts extends React.Component<
  IPromptsPreferencesProps,
  IPromptsPreferencesState
> {
  public constructor(props: IPromptsPreferencesProps) {
    super(props)

    this.state = {
      confirmRepositoryRemoval: this.props.confirmRepositoryRemoval,
      confirmDiscardChanges: this.props.confirmDiscardChanges,
      confirmDiscardChangesPermanently:
        this.props.confirmDiscardChangesPermanently,
      confirmDiscardStash: this.props.confirmDiscardStash,
      confirmCheckoutCommit: this.props.confirmCheckoutCommit,
      confirmForcePush: this.props.confirmForcePush,
      confirmUndoCommit: this.props.confirmUndoCommit,
      uncommittedChangesStrategy: this.props.uncommittedChangesStrategy,
    }
  }

  private onConfirmDiscardChangesChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ confirmDiscardChanges: value })
    this.props.onConfirmDiscardChangesChanged(value)
  }

  private onConfirmDiscardChangesPermanentlyChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ confirmDiscardChangesPermanently: value })
    this.props.onConfirmDiscardChangesPermanentlyChanged(value)
  }

  private onConfirmDiscardStashChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ confirmDiscardStash: value })
    this.props.onConfirmDiscardStashChanged(value)
  }

  private onConfirmCheckoutCommitChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ confirmCheckoutCommit: value })
    this.props.onConfirmCheckoutCommitChanged(value)
  }

  private onConfirmForcePushChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ confirmForcePush: value })
    this.props.onConfirmForcePushChanged(value)
  }

  private onConfirmUndoCommitChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ confirmUndoCommit: value })
    this.props.onConfirmUndoCommitChanged(value)
  }

  private onConfirmRepositoryRemovalChanged = (
    event: React.FormEvent<HTMLInputElement>
  ) => {
    const value = event.currentTarget.checked

    this.setState({ confirmRepositoryRemoval: value })
    this.props.onConfirmRepositoryRemovalChanged(value)
  }

  private onUncommittedChangesStrategyChanged = (
    value: UncommittedChangesStrategy
  ) => {
    this.setState({ uncommittedChangesStrategy: value })
    this.props.onUncommittedChangesStrategyChanged(value)
  }

  public render() {
    return (
      <DialogContent>
        <div className="advanced-section">
          <h2>Show a confirmation dialog before...</h2>
          <Checkbox
            label="Removing repositories"
            value={
              this.state.confirmRepositoryRemoval
                ? CheckboxValue.On
                : CheckboxValue.Off
            }
            onChange={this.onConfirmRepositoryRemovalChanged}
          />
          <Checkbox
            label="Discarding changes"
            value={
              this.state.confirmDiscardChanges
                ? CheckboxValue.On
                : CheckboxValue.Off
            }
            onChange={this.onConfirmDiscardChangesChanged}
          />
          <Checkbox
            label="Discarding changes permanently"
            value={
              this.state.confirmDiscardChangesPermanently
                ? CheckboxValue.On
                : CheckboxValue.Off
            }
            onChange={this.onConfirmDiscardChangesPermanentlyChanged}
          />
          <Checkbox
            label="Discarding stash"
            value={
              this.state.confirmDiscardStash
                ? CheckboxValue.On
                : CheckboxValue.Off
            }
            onChange={this.onConfirmDiscardStashChanged}
          />
          <Checkbox
            label="Checking out a commit"
            value={
              this.state.confirmCheckoutCommit
                ? CheckboxValue.On
                : CheckboxValue.Off
            }
            onChange={this.onConfirmCheckoutCommitChanged}
          />
          <Checkbox
            label="Force pushing"
            value={
              this.state.confirmForcePush ? CheckboxValue.On : CheckboxValue.Off
            }
            onChange={this.onConfirmForcePushChanged}
          />
          <Checkbox
            label="Undo commit"
            value={
              this.state.confirmUndoCommit
                ? CheckboxValue.On
                : CheckboxValue.Off
            }
            onChange={this.onConfirmUndoCommitChanged}
          />
        </div>
        <div className="advanced-section">
          <h2>If I have changes and I switch branches...</h2>

          <RadioButton
            value={UncommittedChangesStrategy.AskForConfirmation}
            checked={
              this.state.uncommittedChangesStrategy ===
              UncommittedChangesStrategy.AskForConfirmation
            }
            label="Ask me where I want the changes to go"
            onSelected={this.onUncommittedChangesStrategyChanged}
          />

          <RadioButton
            value={UncommittedChangesStrategy.MoveToNewBranch}
            checked={
              this.state.uncommittedChangesStrategy ===
              UncommittedChangesStrategy.MoveToNewBranch
            }
            label="Always bring my changes to my new branch"
            onSelected={this.onUncommittedChangesStrategyChanged}
          />

          <RadioButton
            value={UncommittedChangesStrategy.StashOnCurrentBranch}
            checked={
              this.state.uncommittedChangesStrategy ===
              UncommittedChangesStrategy.StashOnCurrentBranch
            }
            label="Always stash and leave my changes on the current branch"
            onSelected={this.onUncommittedChangesStrategyChanged}
          />
        </div>
      </DialogContent>
    )
  }
}
