import React from 'react'
import Card from '../../elements/Card'
import Tab from '../../elements/Tab'
import Tabs from '../../elements/Tabs'
import MatchAdmin from './MatchAdmin'
import ResultAdmin from './ResultAdmin'
import TournamentAdmin from './TournamentAdmin'
import UserAdmin from './UserAdmin'

function Admin() {
  return (
    <Card className="m3 p1">
      <Tabs>
        <Tab title="User"><UserAdmin /></Tab>
        <Tab title="Tournament"><TournamentAdmin /></Tab>
        <Tab title="Match"><MatchAdmin /></Tab>
        <Tab title="Result"><ResultAdmin /></Tab>
      </Tabs>
    </Card>
  )
}

export default Admin
